public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        List<Contact> lstContato = [ SELECT FirstName, LastName, Email FROM Contact ];
        return lstContato;
    }
}
