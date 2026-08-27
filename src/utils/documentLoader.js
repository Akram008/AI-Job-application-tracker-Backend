import {PDFLoader} from "@langchain/community/document_loaders/fs/pdf"

export const document_loader = async(url) =>{
    const loader = new PDFLoader(url)
    const doc = await loader.load() 
    return doc[0].pageContent 
}


