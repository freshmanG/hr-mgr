<template>
  <div>
    <a-modal
      title="添加用户"
      :visible="props.show"
      @ok="submit"
      @cancel="close"
    >
      <a-form :label-col="{ span: 5 }">
        <a-form-item label="账户名">
          <a-input v-model:value="addForm.account" />
        </a-form-item>
        <a-form-item label="密码">
          <a-input v-model:value="addForm.password" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script src="./index.js">
</script>
