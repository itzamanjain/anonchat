import mongoose from "mongoose"
const Schema = mongoose.Schema

const NotificationSchema = new Schema({
  senderName: {
    type: String,
  },
  receiverName: {
    type: String,
  },
  notificationAction: {
    type: String,
  },
  postId: {
    type: String,
  },
  postTitle: {
    type: String,
  },
})

export const Notification = mongoose.model('Notification', NotificationSchema)

