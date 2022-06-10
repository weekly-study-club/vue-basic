<template>
  <div class="form">
    <form
      action=""
    >
      <input
        v-model="xss"
        :type="fieldType"
        name="foo">
      <button type="button">
        전송
      </button>
      {{ xss }}
    </form>
    <ul>
      <li
        v-for="(item, key) in data"
        :key="key"
      >
        {{ item }}
      </li>
    </ul>
    <button @click="onAddItem">추가</button>
    갯수: {{ getDataCount() }}, {{ dataCount }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      fieldType: 'password',
      data: [
        1,
        2,
        3,
        4
      ],
    };
  },
  computed: {
    dataCount() {
      return this.data.length;
    },
  },
  watch: {
    // data: {
    //   deep: true,
    //   handler(data) {
    //     window.alert(`배열 데이터가 ${data.length}개로 변경 되었습니다.`);
    //   }
    // },
    dataCount(count) {
      window.alert(`배열 데이터가 ${count}개로 변경 되었습니다.`);
    },
  },
  methods: {
    onAddItem() {
      this.data.push(this.data.length + 1);
    },
    getDataCount() {
      return this.data.length;
    },
  },
};
</script>