<template>
    <div class="content">
        <h1>导入 WakaTime 数据</h1>
        <div style="margin-top: 20px">
            <Field
                v-model="text"
                class="text-area"
                placeholder="WakaTime Content"
                type="textarea"
                autosize
                rows="40"
            />
        </div>
        <div style="margin-top: 20px">
            <Button type="primary" @click="sumbit"> 提交 </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import Button from "vant/lib/button";
import "vant/lib/button/index.less";
import Field from "vant/lib/field";
import "vant/lib/field/index.less";
import utils from '../../utils/index';

export default {
    components: { Button, Field },
    data() {
        return {
            text: "",
        };
    },
    computed: {
        ...mapState({
            indexData: (state) => state.indexStore?.data,
        }),
    },
    methods: {
        async sumbit() {
            console.log(this);
            const data = await window.fetch("/codetime/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-csrf-token": utils.getCookie("csrfToken")
                },
                body: JSON.stringify({
                    content: this.text,
                }),
            });

            console.log(data);
        },
    },
};
</script>

<style lang="less" scoped >
.content {
    .text-area {
        border: 1px solid #888888;
    }
    height: auto;
    width: 1000px;
    margin: auto;
    text-align: center;
    margin-top: 200px;
}
</style>
