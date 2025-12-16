import ProductTop from '../components/ProductTop'
import crmImage from '../assets/product/crm.png'
import crmImage2 from '../assets/product/crm2.jpg'
import crmImage3 from '../assets/product/crm3.jpg'

const driveData={
        h: "Bitrix24 Drive is a tool for storing files",
        p: "Store company documents and personal files: phone conversation records, files from mail or images from comments.",
        img: "https://helpdesk.bitrix24.com/upload/medialibrary/e86/kahxngvkqfacsqw1a2ou1nu95ohjd5we/drive.jpg", h_2: "Personal and company drive",
        p_2: "Each employee has a personal storage space in Bitrix24. Files that you have worked with automatically appear on the drive.",
        img_2: "https://helpdesk.bitrix24.com/upload/medialibrary/87c/zl59zh0qvh346gz1xg0hb547sucbehwi/handling.jpg",

        h_3: "Files and folders",
        p_3: "Files on drive can be moved, edited, downloaded, deleted. Edit text documents, tables and presentations. Select the way you work with your documents: locally, in the cloud or in Bitrix24.",
        img_3: "https://helpdesk.bitrix24.com/upload/medialibrary/87c/zl59zh0qvh346gz1xg0hb547sucbehwi/handling.jpg",
        btn: "AUTOMATE YOUR SALES",

        h_4:"Synchronize Bitrix24 Drive with your computer",
        p_4:"Files and folders on Bitrix24 drive can be synchronized with your computer. Synchronization works both ways: if you edit a file on your computer, the changes will be immediately displayed in Bitrix24 and vice versa. To synchronize the drive, install Bitrix24 Messenger.",
        img_4:"https://helpdesk.bitrix24.com/upload/medialibrary/908/x7ki0za9rd1vfzisp2db9fin7pm2rrdb/sync.jpg",
        btn_1:"GET STARTED",

        h_5:"Drive sharing",
        p_5:"Share drive documents using internal and public links. Use internal links for colleagues and external links for external users. View text, audio, video, images, and presentations without downloading them. This is useful when you need to quickly familiarize yourself with the document content.",
        img_5:"https://helpdesk.bitrix24.com/upload/medialibrary/bb3/x48sjz444hkas87kp0oq2m92b8vkyo9u/share.jpg",
        btn_2:"GET STARTED",

        h_6:"MORE THAN JUST DRIVE",
        p_6:"",
        img_6:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/crm/features_clear.png.webp?1764863685915"


    }

const Drive=()=>{
    return(
        <>
        <ProductTop data={driveData}/>
        </>
    );
}
 export default Drive;