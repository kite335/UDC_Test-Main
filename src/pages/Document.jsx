import ProductTop from '../components/ProductTop'
import crmImage from '../assets/product/crm.png'
import crmImage2 from '../assets/product/crm2.jpg'
import crmImage3 from '../assets/product/crm3.jpg'

const docData={
        h: "Online documents and cloud file storage",
        p: "Bitrix24 features reliable cloud storage and an advanced online document management system for swift and efficient collaboration across your entire company.",
        img: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/header-human-online-documents-and-cloud-file-storage.png.webp?1764863685915", 
        h_2: "Online documents",
        p_2: "View, co-edit, and share documents online with your colleagues and external users. Create text documents, spreadsheets, and even presentations – all inside Bitrix24 document management software.",
        img_2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/online-documents.png.webp?1764863685915",
        h_3: "File storage software",
        p_3: "Bitrix24 web file storage software allows you to create, edit, and share any work-related files. Easily accessible from both desktop and mobile devices, integrated with Google Docs and Office 365, Bitrix24 Drive is a great fit for your project management needs.",
        img_3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/file-storage.png.webp?1764863685915",
        btn: "START FOR FREE",

        h_4:"Online document management",
        p_4:" Manage documents via a single dashboard where you can view recent activity and changes. ",
        img_4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/online-documents-card-3.png.webp?1764863685915",
        btn_1:"",

        h_5:"Real-time editing",
        p_5:"Create and edit text documents, spreadsheets, and presentations in real-time. Invite other users (whether they have a Bitrix24 account or not) to co-edit documents online.",
        img_5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/online-documents-card-1.png.webp?1764863685915",
        btn_2:"",

        h_6:"More than just online documents & file storage",
        p_6:"A single place for you to store all your corporate knowledge and wisdom, Bitrix24 Knowledge Base can be easily edited and expanded by all your team members..",
        img_6:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/crm/features_clear.png.webp?1764863685915"

    }

const Document=()=>{
    return(
        <>
        <ProductTop data={docData}/>
        </>
    );
}
 export default Document;