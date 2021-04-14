<template>
  <div>
    <a-card>
      <h2>yonghu</h2>
      <a-divider />
      <space-between>
        <div class="search">
          <!-- <a-input
            placeholder="根据书名搜索"
            enter-button
            v-model:value="keyword"
            @search="onSearch"
          /> -->
          <a-input-search
            placeholder="根据账户搜索"
            enter-button
            v-model:value="keyword"
            @search="onSearch"
          />
          <a v-if="isSearch" href="javascript:;" @click="backALL">返回</a>
        </div>
        <a-button @click="showAddModal = true">添加用户</a-button>
      </space-between>

      <a-divider />
      <div>
        <a-table
          bordered
          :pagination="false"
          :data-source="list"
          :columns="columns"
        >
          <template #createdAt="{ record }">
            {{ formatTimestamp(record.meta.createAt) }}
          </template>
          <template #action="{ record }">
            <a href="javascript:;" @click="resetPassword(record)">重置密码</a>
            &nbsp;
            <a href="javascript:;" @click="remove(record)">删除</a>
          </template>
        </a-table>
      </div>

      <flex-end style="margin-top: 16px" v-if="isSearch">
        <a-pagination
          v-model="curPage"
          :total="total"
          :page-size="10"
          @change="setPage"
        ></a-pagination>
      </flex-end>
    </a-card>
    <add-one v-model:show="showAddModal" @getList="getUser" />
  </div>
</template>

<script src="./index.js">
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>