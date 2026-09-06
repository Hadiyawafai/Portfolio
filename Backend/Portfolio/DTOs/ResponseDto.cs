using Portfolio.Models;
namespace Portfolio.DTOs;

public class ResponseDto
{
    public Boolean Flag {get;set;}
    public object? Data {get;set;}
    public string Message=string.Empty;
}