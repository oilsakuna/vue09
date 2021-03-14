<template>
  <div class="container">
    <b-card id="dark">
      <h1>Register</h1>
      <div class="row">
        <b-label class="col-3">Email : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="em"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Name : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="n"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">LastName : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="ln"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Phone : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="p"></b-input>
      </div>
      <br />
      <b-button variant="success" @click="addData()">Submit</b-button>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main.js";
export default {
  data() {
    return {
      Email : "",
      Name : "",
      LastName : "",
      Phone: "",
    };
  },
  methods: {
    addData() {
      alert("compelet");
      const data = {
        Email: this.em,
        Name: this.n,
        LastName: this.ln,
        IPhone: this.p,
      };
      db.collection("MyForm")
        .doc("User")
        .set(data)
        .then(function () {
          console.log("Ducument successfully written! -> MyFrom");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      const dataText = {
        Email: this.em,
        Name: this.n,
        LastName: this.ln,
        Phone: this.p,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Ducument successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
</style>
