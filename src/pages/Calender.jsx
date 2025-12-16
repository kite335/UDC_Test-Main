import ProductTop from '../components/ProductTop'
import crmImage from '../assets/product/crm.png'
import crmImage2 from '../assets/product/crm2.jpg'
import crmImage3 from '../assets/product/crm3.jpg'

const calenderData={
        h: "Free shared calendars from Bitrix24",
        p: "Do a Little More Each Day with Bitrix24 Calendars",
        img: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/header-human-shared-calendars.png.webp?1764863685915",
         h_2: "Bitrix24 Features",
        p_2: "Get a free online calendar for your business to plan meetings, manage tasks, and set appointments – all part of a single online calendar collaboration platform called Bitrix24.",
        img_2: "https://www.bitrix24.in/images/content_en/solutions/calendars/calendars_anim_list-6.jpg?1764863685915",

        h_3: "Recurring events",
        p_3: "You can set any event in your Bitrix24 calendar to repeat on a daily, weekly, monthly, or any other basis. Works great for daily planning meetings and similar events.",
        img_3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/calendar-card-2.png.webp?1764863685915",
        btn: "AUTOMATE YOUR SALES",
        h_4:"Time zones",
        p_4:"When you try to invite someone who's in another time zone, our calendar will take this person's local time into consideration and notify you if they might not be available.",
        img_4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/calendar-card-1.png.webp?1764863685915",
        btn_1:"SET YOUR CALENDER",
        h_5:"Ideal for Yours all group meetings and Time Optimization",
        p_5:"The link to your calendar can be sent via email, messenger, or SMS to the meeting participants, so that they could pick an open slot and add it to their calendar.",
        btn_2:"GET STARTED",
        img_5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/open-slots-card-2.png.webp?1764863685915",
         img_6:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/crm/features_clear.png.webp?1764863685915"
    }

const Calender=()=>{
    return(
        <>
        <ProductTop data={calenderData}/>
        </>
    );
}
 export default Calender;