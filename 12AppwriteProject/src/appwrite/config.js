import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  Database;
  bucket;

  constructor() {
    console.log(conf)
    this.client
    .setEndpoint(conf.appwriteURL)
    .setProject(conf.appwriteProjectId);
    this.database=new Databases(this.client)
    this.bucket=new Storage(this.client)
  }
  async createPost({title,slug,content,featuredImage,status,userId}){
    try {
       return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
            title,content,featuredImage,status,userId
        }
       )
    } catch (error) {
        console.log("Appwrite service:: createPost::error",error);
    }
  }
  async updatePost(slug,{title,content,featuredImage,status,userId}){
    try {
        return await this.database.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,{
                title,content,featuredImage,status,userId
            }
        )
    } catch (error) {
        console.log("Appwrite servise::updatePost::error",error);
    }
  }
  async deletePost(slug){
        try {
             await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service::deletePost::error",error);
            return false
        }
  }
  async getPost(slug){
    try {
        await this.database.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true
    } catch (error) {
        console.log("Appwrite service::getPost::error",error);
        return false
    }
    
  }

  async getPosts(queries=[Query.equal("status","active")]){
    try {
        return await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
            100,
            0

        )
    } catch (error) {
        console.log("Appwrite services::getPosts::error",error);
        return false
    }
  }

  //File Uplaod Service

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique,
            file
        )
    } catch (error) {
        console.log("Appwrite service::uploadFile::error",error);
        return false
    }
  }
  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Apprwrite service::deleteFile::error",error);
        return false
    }
  }
  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId

    )
}

}
const service = new Service();
export default service;
