namespace Portfolio.Services;
using Portfolio.DTOs;
using Portfolio.Models;

public interface IContactService
{
    ResponseDto CreateContact(ContactDto contactDto );
}