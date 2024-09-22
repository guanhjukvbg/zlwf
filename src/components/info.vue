<template>
    <div class="info-container">
      <div class="profile-section">
        <img class="profile-pic" src="../img/头像.png" alt="用户头像" />
        <div class="profile-details">
          <h2 class="username">{{ formData.nickname || "Guan" }}</h2>
          <p class="account-id">账号ID: {{ formData.email || "15012312300" }}</p>
          <p class="registration-time">注册时间: 2024-08-10 12:10:00</p>
          <p class="verified-status">
            实名认证: <span class="verified">已认证</span>
          </p>
        </div>
      </div>
  
      <div class="settings-section">
        <form class="settings-form" @submit.prevent="saveData">
          <label for="email">邮箱</label>
          <input
            id="email"
            type="email"
            v-model="formData.email"
            :disabled="!isEditable"
            placeholder="请输入邮箱地址， 如xxx@bytedance.com"
          />
  
          <label for="nickname">昵称</label>
          <input
            id="nickname"
            type="text"
            v-model="formData.nickname"
            :disabled="!isEditable"
            placeholder="请输入您的昵称"
          />
  
          <label for="country">国家/地区</label>
          <select id="country" v-model="formData.country" :disabled="!isEditable">
            <option value="" disabled selected>请选择</option>
            <option value="中国">中国</option>
          </select>
  
          <label for="city">所在区域</label>
          <select id="city" v-model="formData.city" :disabled="!isEditable">
            <option value="" disabled selected>请选择</option>
            <option value="北京">北京市/北京市/海淀区</option>
          </select>
  
          <label for="address">具体地址</label>
          <input
            id="address"
            type="text"
            v-model="formData.address"
            :disabled="!isEditable"
            placeholder="请输入您的地址"
          />
  
          <label for="bio">个人简介</label>
          <textarea
            id="bio"
            v-model="formData.bio"
            :disabled="!isEditable"
            placeholder="请输入个人简介，最多不超过200字"
          ></textarea>
  
          <div class="buttons">
            <button type="submit" class="save-btn" v-if="isEditable">保存</button>
            <button type="button" class="edit-btn" @click="toggleEdit">
              {{ isEditable ? "取消" : "编辑" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    name: "Info",
    setup() {
      const formData = ref({
        email: "",
        nickname: "",
        country: "",
        city: "",
        address: "",
        bio: "",
      });
  
      const isEditable = ref(false);
  
      const toggleEdit = () => {
        isEditable.value = !isEditable.value;
      };
  
      const saveData = () => {
        localStorage.setItem("userData", JSON.stringify(formData.value));
        isEditable.value = false;
      };
  
      onMounted(() => {
        const savedData = localStorage.getItem("userData");
        if (savedData) {
          formData.value = JSON.parse(savedData);
        }
      });
  
      return {
        formData,
        isEditable,
        toggleEdit,
        saveData,
      };
    },
  };
  </script>
  
  <style scoped>
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .profile-section {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .profile-pic {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 40px;
  }
  
  .profile-details {
    flex-grow: 1;
  }
  
  .username {
    font-size: 1.5rem;
    margin: 0;
  }
  
  .account-id,
  .registration-time,
  .verified-status {
    font-size: 1rem;
    margin: 5px 0;
  }
  
  .verified {
    color: green;
  }
  
  .settings-section {
    width: 100%;
  }
  
  .settings-form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #555;
  }
  
  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    box-sizing: border-box;
    background-color: #f8f8f8;
  }
  
  input[disabled],
  select[disabled],
  textarea[disabled] {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .save-btn,
  .edit-btn {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .save-btn {
    background-color: #007bff;
    color: white;
  }
  
  .edit-btn {
    background-color: #f8f9fa;
    color: #333;
  }
  
  @media (max-width: 768px) {
    .profile-section {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .profile-pic {
      margin-bottom: 15px;
    }
  
    .buttons {
      flex-direction: column;
      gap: 10px;
    }
  
    .save-btn,
    .edit-btn {
      width: 100%;
    }
  }
  </style>
  