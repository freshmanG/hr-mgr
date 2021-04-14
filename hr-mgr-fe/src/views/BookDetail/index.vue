<template>
  <div>
    <a-card>
      <space-between>
        <h2>{{ d.name }}</h2>
        <div>
          <a-button size="small" type="primary" @click="showUpdateModal = true"
            >编辑</a-button
          >
          &nbsp;
          <a-button size="small" type="danger" @click="remove">删除</a-button>
        </div>
      </space-between>
      <a-divider />
      <div class="base-info">
        <div class="items">
          <div class="item">
            <div class="title">价格</div>
            <div class="content">{{ d.price }}</div>
          </div>
          <div class="item">
            <div class="title">作者</div>
            <div class="content">{{ d.author }}</div>
          </div>
          <div class="item">
            <div class="title">分类</div>
            <div class="content">{{ d.classify }}</div>
          </div>
        </div>
        <div class="items">
          <div class="item">
            <div class="title">出库时间</div>
            <div class="content">{{ formatTimestamp(d.publishDate) }}</div>
          </div>
        </div>
      </div>
    </a-card>
    <div class="log">
      <a-card title="出入库日志">
        <template #extra>
          <span>
            <a href="javascript:;" @click="logFilter('IN_COUNT')"
              ><CheckOutlined v-if="curLogType === 'IN_COUNT'" />入库日志</a
            >
          </span>
          <span style="margin-left: 12px">
            <a href="javascript:;" @click="logFilter('OUT_COUNT')"
              ><CheckOutlined v-if="curLogType === 'OUT_COUNT'" />出库日志</a
            >
          </span>
        </template>
        <div>
          <a-table
            :data-source="log"
            :columns="columns"
            bordered
            :pagination="false"
          >
            <template #createAt="{ record }">
              {{ formatTimestamp(record.meta.createAt) }}
            </template>
          </a-table>
        </div>

        <space-between style="margin-top: 24px">
          <div />
          <a-pagination
            v-model="logCurPage"
            :total="logTotal"
            :page-size="10"
            @change="setLogPage"
          ></a-pagination>
        </space-between>
      </a-card>
      <update v-model:show="showUpdateModal" :book="d" @update="update" />
    </div>
  </div>
</template>

<script src="./index.js">
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
