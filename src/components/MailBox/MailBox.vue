<template lang="">
  <div class="wrapper">
    <div class="header">
      <NCheckbox />
      <div class="action" v-for="action in actionsList">
        <n-icon size="15" :component="action.icon" />

        <p>{{ action.label }}</p>
      </div>
    </div>
    <div class="content">
      <div class="letter" v-for="letter in mailList">
        <div class="info">
          <NCheckbox />
          <div class="image"></div>
          <p>{{ letter.from }}</p>
        </div>
        <div>
          <span class="message">
            <p class="title">{{ letter.title }}</p>
            <p class="description">{{ letter.description }}</p>
          </span>
        </div>

        <p class="date">{{ letter.date }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ArrowRightOutlined, DeleteOutlined, CloseCircleOutlined, MailOutlined } from '@vicons/antd'
import { NCheckbox } from 'naive-ui'

export default {
  data() {
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
      ],
      actionsList: [
        {
          icon: ArrowRightOutlined,
          label: 'Переслать'
        },
        {
          icon: DeleteOutlined,
          label: 'Удалить'
        },
        {
          icon: CloseCircleOutlined,
          label: 'Это спам'
        },
        {
          icon: MailOutlined,
          label: 'Прочитано'
        }
      ]
    }
  },
  components: { NCheckbox }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px 15px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #fff;
}
.header {
  display: flex;
  align-items: center;
  height: max-content;

  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;

  width: 100%;
  gap: 20px;
}
.action {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    opacity: 0.7;
  }
}
.letter {
  gap: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0px;
}
.info {
  display: flex;
  align-items: center;
  gap: 20px;
}
.image {
  width: 40px;
  height: 40px;
  background: #ccc;
  border-radius: 50%;
}
.message {
  gap: 10px;
  display: flex;
  align-items: center;
}

.title {
  font-weight: bold;
}

.date {
  margin-left: auto;
}
</style>
