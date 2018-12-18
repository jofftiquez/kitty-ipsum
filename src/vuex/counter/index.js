import { ref } from '../../firebase/exports';

const state = {
  totalParagraphs: 0,
  totalSentences: 0
};

const getters = {
  totalParagraphs: (s) => s.totalParagraphs,
  totalSentences: (s) => s.totalSentences
};

const actions = {
  increment: async ({commit}, {type, count}) => {
    if(type === 'Sentence') {
      await ref.child('totalSentences')
        .transaction(total => {
          if(!total) return 1;
          return total += parseInt(count);
        });
    }

    if(type === 'Paragraph') {
      await ref.child('totalParagraphs')
        .transaction(total => {
          if(!total) return 1;
          return total += parseInt(count);
        });
    }
  },
  watchCount: ({dispatch}) => {
    dispatch('watchSentencesCount');
    dispatch('watchParagraphsCount');
  },
  watchSentencesCount: ({commit}) => {
    ref.child('totalSentences')
      .on('value', snap => {
        commit('setTotalSentences', snap.val());
      }, err => console.log(err));
    },
  watchParagraphsCount: ({commit}) => {
    ref.child('totalParagraphs')
      .on('value', snap => {
        commit('setTotalParagraphs', snap.val());
      }, err => console.log(err));
  }
};

const mutations = {
  setTotalSentences: (s, val) => {
    s.totalSentences = val;
  },
  setTotalParagraphs: (s, val) => {
    s.totalParagraphs = val;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
