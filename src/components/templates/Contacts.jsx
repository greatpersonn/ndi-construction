import ContactsForm from '../organisms/ContactsForm';
import Article from '../organisms/Article';

import imageArticle_01 from '../../assets/images/Work_Image_09.png';

const contentContacts = {
    header: "contacts.header",
    phoneTitle: ["contacts.first-phone", "contacts.second-phone", "contacts.title-phone"],
    emailTitle: ["contacts.email-company", "contacts.title-email"],
    title: ["contacts.first-title"]
}

const Contacts = () => {
    return (
        <>
            <Article smallTitle={"contacts-page.small-header"} contents={["contacts-page.title.first", "contacts-page.title.second", "contacts-page.title.third", "contacts-page.title.fourth"]} header={"contacts-page.header"} imageUrl={imageArticle_01} side={"left"} />
            <ContactsForm header={contentContacts.header} phoneTitle={contentContacts.phoneTitle} emailTitle={contentContacts.emailTitle} title={contentContacts.title} />
        </>
    )
}

export default Contacts;