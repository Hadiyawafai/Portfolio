using Portfolio.Data;
using Portfolio.DTOs;
using Portfolio.Models;

namespace Portfolio.Services;

public class ContactService : IContactService
{
    private readonly ApplicationDbContext _context;

    public ContactService(ApplicationDbContext context)
    {
        _context = context;
    }

    public ResponseDto CreateContact(ContactDto contactDto)
    {
        // Check if DTO is null
        if (contactDto == null)
        {
            return new ResponseDto
            {
                Flag = false,
                Message = "Contact data is required"
            };
        }

        // Check email
        if (string.IsNullOrWhiteSpace(contactDto.Email))
        {
            return new ResponseDto
            {
                Flag = false,
                Message = "Email is required"
            };
        }

        // Check name
        if (string.IsNullOrWhiteSpace(contactDto.Name))
        {
            return new ResponseDto
            {
                Flag = false,
                Message = "Name is required"
            };
        }

        // Create Contact model from DTO
        var contact = new Contact
        {
            Name = contactDto.Name,
            Email = contactDto.Email
        };

        // Add Contact to database
        _context.Contacts.Add(contact);

        // Save changes
        _context.SaveChanges();

        // Return response
        return new ResponseDto
        {
            Flag = true,
            Message = "Contact details created successfully"
        };
    }
}