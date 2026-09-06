using Microsoft.AspNetCore.Mvc;
using Portfolio.DTOs;
using Portfolio.Services;

namespace Portfolio.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CreateContactController : ControllerBase
{
    private readonly IContactService _contactService;

    public CreateContactController(IContactService contactService)
    {
        _contactService = contactService;
    }

    [HttpPost]
    public IActionResult CreateContact([FromBody] ContactDto contactDto)
    {
        if (contactDto == null)
        {
            return BadRequest(new ResponseDto
            {
                Flag = false,
                Message = "Contact details cannot be null",
                Data = null
            });
        }

        if (string.IsNullOrWhiteSpace(contactDto.Name))
        {
            return BadRequest(new ResponseDto
            {
                Flag = false,
                Message = "Name is required",
                Data = null
            });
        }

        if (string.IsNullOrWhiteSpace(contactDto.Email))
        {
            return BadRequest(new ResponseDto
            {
                Flag = false,
                Message = "Email is required",
                Data = null
            });
        }

        var response = _contactService.CreateContact(contactDto);

        return Ok(response);
    }
}