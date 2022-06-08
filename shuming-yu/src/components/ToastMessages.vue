<template>
    <!-- 定位使用 -->
    <div class="toast-container position-absolute pe-3 top-0 end-0" style="z-index: 1050">
        <!-- 列表呈現 -->
        <Toast v-for="(msg, key) in messages" :key="key"
        :msg="msg"
        />
    </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {

    data() {
        return {
            messages: [],
        };
    },

    components: {
        Toast,
    },

    inject: ['emitter'],

    mounted() {
        // 接受部分建議放入 created & mounted 內
        // on 方式監聽
        // push-message 觸發後會觸發後面 message (參數)事件
        this.emitter.on('push-message', (message) => {
            const { style = 'success', title, content } = message;
            this.messages.push({ style, title, content });
        })
    },
};
</script>
