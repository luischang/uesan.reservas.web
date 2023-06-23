<template>
  <div class="modal-overlay">
    <div class="modal-container">
      <div class="modal-header"></div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Exo";
}

.modal-container {
  background-color: #ece4b7;
  width: 400px;
  padding: 20px;
  border-radius: 4px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
}
</style>
