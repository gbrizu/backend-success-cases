//import { getAllContacts, getContactById } from '../contactService.js';
//import ContactModel from '../../models/contactModel';
const contactService = require('../contactService.js');
const ContactModel = require('../../models/contactModel.js');

describe('contactService', () => {
    // Verifica que getAllContacts devuelva todos los contactos.
    describe('getAllContacts', () => {
        it('should return all contacts', async () => {
        // Arrange
        const mockContacts = [
            { id: 1, name: 'Alice', email: 'alice@example.com' },
            { id: 2, name: 'Bob', email: 'bob@example.com' }
        ];
        jest.spyOn(ContactModel, 'find').mockResolvedValue(mockContacts);

        // Act
        const result = await contactService.getAllContacts();

        // Assert
        expect(result).toEqual(mockContacts);
        });

        // Verifica que getAllContacts devuelva un array vacío si no hay contactos.
        it('should return an empty array if no contacts are found', async () => {
        // Arrange
        jest.spyOn(ContactModel, 'find').mockResolvedValue([]);

        // Act
        const result = await contactService.getAllContacts();

        // Assert
        expect(result).toEqual([]);
        });

        // Verifica que getAllContacts lance un error si hay un problema al recuperar los contactos.
        it('should throw an error if there is a problem retrieving contacts', async () => {
        // Arrange
        jest.spyOn(ContactModel, 'find').mockRejectedValue(new Error('Database error'));

        // Act & Assert
        await expect(contactService.getAllContacts()).rejects.toThrow('Database error');
        });
    });

    // Verifica que getContactById devuelva el contacto para un ID dado.
    describe('getContactById', () => {
        it('should return the contact for a given ID', async () => {
        // Arrange
        const mockId = 1;
        const mockContact = { id: 1, name: 'Alice', email: 'alice@example.com' };
        jest.spyOn(ContactModel, 'findById').mockResolvedValue(mockContact);

        // Act
        const result = await contactService.getContactById(mockId);

        // Assert
        expect(result).toEqual(mockContact);
        });

        // Verifica que getContactById lance un error si el ID no existe.
        it('should throw an error if the ID does not exist', async () => {
        // Arrange
        const mockId = 999;
        jest.spyOn(ContactModel, 'findById').mockResolvedValue(null);

        // Act & Assert
        await expect(contactService.getContactById(mockId)).rejects.toThrow('Contact not found');
        });

        // Verifica que getContactById lance un error si hay un problema al recuperar el contacto.
        it('should throw an error if there is a problem retrieving the contact', async () => {
        // Arrange
        const mockId = 1;
        jest.spyOn(ContactModel, 'findById').mockRejectedValue(new Error('Database error'));

        // Act & Assert
        await expect(contactService.getContactById(mockId)).rejects.toThrow('Database error');
        });
    });
});