import { Client,Account,ID, Avatars, Databases, Query } from 'react-native-appwrite';

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
const database= new Databases(client);
export const createUser=async ({username,email,password})=>{
  
    try{
        const New_Account=await account.create(
           ID.unique(),
           email,
           password,
           username
        )
        console.log(New_Account)
        if(!New_Account) throw new Error
        const Avatar_Url=avatar.getInitials(username)
        await SignIn({email:email,password:password})
        const New_User=database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId:New_Account.$id,
                username:username,
                email:email,
                password:password,
                avatar:Avatar_Url
            }
        );
        return New_User
    }catch(error){
        console.log(error)
        console.log(email)
        throw new Error(error);
    }
}
export async function SignIn({email,password}){
    try{
        account.deleteSessions()
        const session = await account.createEmailPasswordSession(email,password)
        return session

    }catch(error){
     console.log(error,'ssss',email);
     throw new Error(error)
    }
}
export async function getCurrentUser() {
    try {
      const currentAccount = await getAccount();
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }