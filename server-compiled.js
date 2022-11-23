(()=>{var e={427:(e,t,n)=>{n(142).config(),n(185).connect(process.env.MONGOOSE_URL)},882:(e,t,n)=>{const r=n(185),s=new r.Schema({name:{type:String,required:!0},email:{type:String,required:!0},passwort:{type:String,required:!0},publicId:String,imageUrl:String,radius:Number}),i=new r.Schema({lng:Number,lat:Number,country:String,city:String}),o=new r.Schema({name:{type:String,required:!0},description:String,location:i,type:String,publicId:String,imageUrl:String,userId:String},{timestamps:!0}),a=r.model("User",s),c=r.model("Location",i),d=r.model("Warning",o);e.exports={Warning:d,Location:c,User:a}},142:e=>{"use strict";e.exports=require("dotenv")},860:e=>{"use strict";e.exports=require("express")},185:e=>{"use strict";e.exports=require("mongoose")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{const{urlencoded:e}=n(860),t=n(860),{Warning:r,Location:s,User:i}=n(882);n(427);const o=t();o.use(t.json()),o.use(e({extended:!0})),o.get("/",(async(e,t)=>{try{const e=await r.find();t.status(200).send(e)}catch(e){t.status(400).send(e)}})),o.post("/add-warning",(async(e,t)=>{try{const n=await i.findById("637e89a5dae3e5065e2d2042"),o=new r({...e.body.warning,userId:n._id}),a=await o.save(),c=new s(e.body.location);await r.updateOne({_id:a._id},{$set:{location:c}}),t.status(200).send("New warning was posted successfully.")}catch(e){t.status(400).send(e)}})),o.listen(3e3,(()=>{console.log("Server is running on port 3000.")}))})()})();