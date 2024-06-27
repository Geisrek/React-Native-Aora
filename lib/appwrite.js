import { Client,Account,ID, Avatars } from 'react-native-appwrite';
export const appwriteConfig={
    endpoint:"https://cloud.appwrite.io/v1",
    platform:"com.jsm.aora",
    projectId:"667b54e500105baaf70f",
    databaseId:"667b57aa001fbc0beba2",
    userCollectionId:"667b57f4003d974c890c",
    videosCollectionId:"667b5839001b1cd2b006",
    storageId:"667b5ade002fd67d26b5"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;
const account = new Account(client);
const avatar=new Avatars(client);
export const createUser=async ({username,email,password})=>{
  
    try{
        const New_Account=await account.create(
           ID.unique(),
           username,
           email,
           password
        )
        if(!New_Account) throw new Error
        const Avatar_Url=avatar.getInitials()
    }catch(error){
        console.log(error)
        throw new Error(error);
    }
}
