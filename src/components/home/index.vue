<template lang="pug">
  v-content
    v-toolbar(flat fixed color="white")
      h1 Sentences - 
        span.primary--text {{totalSentences}}
      h1.mx-3 •
      h1 Paragraphs - 
        span.primary--text {{totalParagraphs}}
    v-container(fluid fill-height)
      v-layout(row align-center justify-center)
        v-flex(xs12 md6)
          v-layout(row justify-center)
            v-flex(xs12 md12).text-xs-center
              h1(:style="{'line-height': 1.2, 'font-size': $isMobile ? '30px' : '40px'}").mb-2 Welcome To
              h1(:style="{'line-height': 1.2, 'font-size': $isMobile ? '50px' : '70px'}") Kitty Ipsum!
              br
              br
              p Generate lorem ipsum composed of "meow" in different hooman languages.
          v-layout(v-bind="$binding" justify-center)
            v-flex(xs12 md6).pa-2
              v-select(v-model="type" :items="types" label="Type" outline)
            v-flex(xs12 md6).pa-2
              v-text-field(v-model="count" mask="##" :label="type === 'Sentence' ? 'Number of sentences' : 'Number of paragraphs'" outline)
          v-layout(row justify-center).text-xs-center
            v-flex(xs12 md6)
              v-btn(large round color="primary" @click="generate")
                strong Generate Meow!
    
    v-btn(
      dark
      fab
      fixed
      bottom
      right
      style="z-index: 9999999"
      @click="shareDialog = true"
    ).share-fab.primary
      v-icon share
    
    are-you-a-cat(
      :dialog="areYouACatDialog"
      @close="v => areYouACatDialog = v"
      @isCat="showSnackbar('Welcome!')"
    )

    result(
      :dialog="resultDialog"
      :result="result"
      @close="v => resultDialog = v"
      @copied="showSnackbar('Copied to clipboard!')"
    )
    
    error(
      :dialog="errorDialog"
      :errorMessage="errorMessage"
      @close="v => errorDialog = v"
    )
    
    share(
      :dialog="shareDialog"
      @close="v => shareDialog = v"
    )

    v-snackbar(
      v-model="showSnack"
      :timeout="4000"
      bottom
      center
    ) {{snackMessage}}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import areYouACat from '@/components/dialogs/are-you-a-cat';
  import result from '@/components/dialogs/result';
  import error from '@/components/dialogs/error';
  import share from '@/components/dialogs/share';
  import meows from '@/assets/meow.json';

  export default {
    components: {
      areYouACat,
      result,
      error,
      share
    },
    created() {
      this.watchCount();
      const isCat = localStorage.getItem('isCat');
      if(isCat !== 'yes') {
        this.areYouACatDialog = true;
      }
    },
    data() {
      return {
        types: ['Sentence', 'Paragraph'],
        type: 'Paragraph',
        count: 1,
        areYouACatDialog: false,
        resultDialog: false,
        errorDialog: false,
        shareDialog: false,
        showSnack: false,
        snackMessage: '',
        errorMessage: '',
        result: '',
      }
    },
    computed: {
      ...mapGetters({
        totalParagraphs: 'counter/totalParagraphs',
        totalSentences: 'counter/totalSentences'
      })
    },
    methods: {
      ...mapActions({
        watchCount: 'counter/watchCount',
        increment: 'counter/increment'
      }),
      async generate() {
        
        if(!parseInt(this.count)) {
          this.errorMessage = `Invalid ${this.type} Count. Must be 1 to 99`;
          this.errorDialog = true;
          return;
        }

        const sentences = [];
        const paragraphs = [];

        for (let a = 0; a < this.count; a++) {
          if(this.type === 'Sentence') {
            sentences.push(this.generateSentence());
          }
          
          if(this.type === 'Paragraph') {
            paragraphs.push(this.generateParagraph());
          }
        }

        if(this.type === 'Sentence') {
          this.result = sentences.join('. ') + '.';
        }
        
        if(this.type === 'Paragraph') {
          this.result = paragraphs.join('\n\n');
        }

        await this.increment({type: this.type, count: this.count});

        this.resultDialog = true;
      },
      generateSentence() {
        const min = 3;
        const max = 10;
        const length = Math.floor(Math.random() * (max - min + 1) + min);
        const words = [];

        for (let a = 0; a < length; a++) {
          let index = Math.floor(Math.random() * meows.length + 0);
          words.push(meows[index]);
        }

        return this.$morphCapitalize(words.join(' '));
      },
      generateParagraph() {
        const min = 3;
        const max = 10;
        const length = Math.floor(Math.random() * (max - min + 1) + min);
        const sentences = [];

        for (let a = 0; a < length; a++) {
          sentences.push(this.generateSentence());
        }

        return sentences.join('. ') + '.';
      },
      showSnackbar(message) {
        this.snackMessage = message;
        this.showSnack = true;
      }
    }
  }
</script>