import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      mailList: [
        {
          id: 0,
          image: '',
          from: 'Яндекс ID',
          title: 'Кто-то входил в ваш аккаунт',
          description: 'Кто-то ввел неправильный пароль',
          date: '12 апреля'
        }
      ]
    }
  }
})
