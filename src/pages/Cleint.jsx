import ProductTop from '../components/ProductTop'
import client from '../assets/product/client.jpg'
import crmImage2 from '../assets/product/crm2.jpg'
import crmImage3 from '../assets/product/crm3.jpg'

const cleintData={
        h: "Work with client database",
        p: "You need a customer database for repeat sales. If you don't have one, or if employees don't keep it properly, then CRM Marketing has nothing to work with, and you won't get repeat sales. ",
        img:"https://helpdesk.bitrix24.com/upload/medialibrary/e88/1bammmrb72k3doui7y8brto6r5l1t83o/contact_center.jpg", h_2: "Prepare customer database for work",
        p_2: "You can only work with CRM Marketing from Bitrix24 CRM. If you keep records of your sales in Excel, another CRM system, or even just in a notebook, transfer them to the CRM. You can transfer the records manually or import the database if you work in another system.",
        img_2:"https://helpdesk.bitrix24.com/upload/medialibrary/718/52s8t7tk4r42g7p9lnc6ch4oj068xtwj/import_custom_csv.jpg",
        h_3: "Access permissions.",
        p_3: "After you have imported all your contacts, you can configure CRM access permissions. Specify the employees who can work with the database. If all employees can work with the database, you can divide them into groups according to their actions: some can only view records, while others can edit and delete them",
        img_3: "https://helpdesk.bitrix24.com/upload/medialibrary/551/a77t2zqiab2pd8xposiv51jmtl8fdin9/crm.jpg",
        btn: "AUTOMATE YOUR SALES",
        h_4:"Astounding benefits of the customer database software",
        p_4:"Customer database software possesses a variety of pros that contribute to its authority and prominence among the consumers who use this software to operate the process of managing relationships with clients,",
        btn_1:"ACCESS THE CLIENT DATA",

        img_4:"https://d57439wlqx3vo.cloudfront.net/iblock/331/3318a738314bbb79c2f389546eec658a/4e7909a0bb85a4a28251e5ddd41243fc.jpg?1764863685915",
        h_5:"How to Create a Customer Service Database",
        p_5:"Final definition with database functions. Defining and understanding the principle of database function is an important point. The task of a truly effective database first of all includes processing.",
        img_5:"https://d57439wlqx3vo.cloudfront.net/iblock/18d/18d3fb7e0dcd0268e7cd706fe5ec16c9/32b26f6b0f92fac2b3740bf227068218.jpg?1764863685915",
        btn_2:"KNOW MORE",
        img_6:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/crm/features_clear.png.webp?1764863685915"
    }

const Cleint=()=>{
    return(
        <>
        <ProductTop data={cleintData}/>
        </>
    );
}
 export default Cleint;