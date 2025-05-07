<template>
    <div class="main-container">
        <div class="navbar">
            
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'MainContainer',
    data() {
        return {
            // 这里可以定义一些数据
        }
    },
    methods: {
        // 这里可以定义一些方法
    },
    mounted() {
        // 组件挂载后执行的代码
        console.log('MainContainer mounted');
    }
}
</script>


<style>

.main-container {
  height: 100%;
  background: #f3f4f7;
  position: relative;
  width: calc(100% - 190px);
}
</style>