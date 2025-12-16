import ProductTop from '../components/ProductTop'
import crmImage from '../assets/product/crm.png'
import crmImage2 from '../assets/product/crm2.jpg'
import crmImage3 from '../assets/product/crm3.jpg'

const mailData={
        h: "Bitrix24 Mail",
        p: "Sell more. Sell better. Sell faster with Bitrix24 a single platform to cover all your needs.",
        img: "https://d57439wlqx3vo.cloudfront.net/iblock/c40/c407907044f027d57c3fcbb85f0757cc/aa220d117cb3e96b3e47d1288200677f.jpg?1764863685915", h_2: "Integration with Bitrix24 tools",
        p_2: "You can write, read, bind to tasks, and save emails to CRM in Bitrix24 Mail. You can create a chat with colleagues or an event in the calendar based on an email.",
        img_2: "https://helpdesk.bitrix24.com/upload/medialibrary/a00/24vhxmppjllmo8vry2a9315ak0fhl15h/create_task.jpg",
        h_3: "Filtering emails",
        p_3: "Check the boxes next to emails (1) to activate the top menu. Here, you can mark emails as read, unread, or spam, move them to another folder, or delete them",
        img_3: "https://helpdesk.bitrix24.com/upload/medialibrary/4bd/yyv0day35teagkserqk5uef0zp7zzeyq/select_action.jpg",
        btn: "GET STARTED MAIL In BITRIX24",
        h_4:"Email synchronization",
        p_4:"Mailbox content is automatically synchronized between mail agents. To enforce the synchronization, click the Sync icon next to your mailbox.",
        img_4:"https://helpdesk.bitrix24.com/upload/medialibrary/7b4/n3wgs2id3h5u0o1q4qbfr2unqyqcail3/sync.jpg",
        btn_1:"SYNCHRONIZE YOUR MAIL",

        h_5:"Manage emails in Bitrix24",
        p_5:"If you have several mailboxes connected, a red dot will appear above the current mailbox. It indicates that there are unread messages in other mailboxes, so you won't miss them.",
        img_5:"https://helpdesk.bitrix24.com/upload/medialibrary/0a2/4jfyu6fw36ri0sabw5m0u9apvslwgkoe/mailbox.jpg",
         btn_2:"SEND YOUR FIRST MAIL NOW",
         h_6:" Discover Bitrix24:Your all-in-One Solution",
         p_6:"Replace a multitude of services and apps with a single online workspace that features everything you need to manage your sales, clients, projects, and team.",
        img_6:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/crm/features_clear.png.webp?1764863685915"
    }

const Mail=()=>{
    return(
        <>
        <ProductTop data={mailData}/>
        </>
    );
}
 export default Mail;