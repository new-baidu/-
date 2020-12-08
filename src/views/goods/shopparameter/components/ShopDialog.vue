<template>
  <div class="">
    <el-dialog
      :title="title[0] + title[1]"
      :visible.sync="visible"
      :before-close="close"
      @close="close"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item
          :label="title[1]"
          prop="name"
          :hide-required-asterisk="true"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import { PutCategories } from "@/api/goods";
export default {
  name: "",
  components: {},
  props: {
    visible: {
      type: Boolean,
    },
    attr_name: {
      type: String,
    },
    title: {
      type: Array,
    },
    attr_id: {
      type: [Number, String],
    },
    value: {
      type: Array,
    },
  },
  data() {
    return {
      form: {
        name: this.attr_name,
      },
      rules: {
        name: [{ required: true, message: "请输入参数名称", trigger: "blur" }],
      },
      formLabelWidth: "120px",
    };
  },
  computed: {},
  watch: {
    attr_name(newVal, oldVal) {
      this.form.name = newVal;
    },
  },
  created() {
    // console.log( this.$parent.$parent.parent.upload());
  },
  mounted() {},
  methods: {
    close() {
      this.$emit("close");
    },
    dialogFormVisible() {
      this.PutCategories();
    },
    async PutCategories() {
      let sel = this.title[1] == "动态参数" ? "many" : "only";
      let id = this.value[this.value.length - 1];
      const data = await PutCategories(id, this.attr_id, {
        attr_name: this.form.name,
        attr_sel: sel,
      });
      if (data.meta.status == 200) {
        this.$message({
          message: data.meta.msg,
          type: "success",
        });
        this.upload();
        this.$emit("dialogFormVisible");
      }
      console.log(data);
    },
    upload() {
      //   this.$parent.upload()
      console.log(123);
      this.$emit('upload')
      // console.log(this.$parent);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
