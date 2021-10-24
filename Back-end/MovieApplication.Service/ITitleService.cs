using MovieApplication.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApplication.Service
{
    public interface ITitleService
    {
        List<Title> getAllTitles();
        List<Title> getAllTitlesByName(string name);
    }
}
