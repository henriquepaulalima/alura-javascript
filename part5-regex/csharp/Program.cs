using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program 
    {
        static void Main(string[] args)
        {
            string alvo = "11a22b33c";
            string pattern = @"(\d\d)(\w)";

            Regex regex = new Regex(pattern);
            MatchCollection matches = regex.matches(alvo);

            foreach (Match match in matches)
            {
                Console.WriteLine(match.Groups[0].value);
                Console.WriteLine(match.Groups[1].value);
                Console.WriteLine(match.Groups[2].value);
                Console.WriteLine(match.Index);
                Console.WriteLine(match.Length);
            }
        }
    }
}