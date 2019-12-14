

ButtonClick = function  ()
  {
    if (document.getElementById(`radio_1` ).checked)  {Task_1  ();};
    if (document.getElementById(`radio_2` ).checked)  {Task_2  ();};
    if (document.getElementById(`radio_3` ).checked)  {Task_3  ();};
    if (document.getElementById(`radio_4` ).checked)  {Task_4  ();};
    if (document.getElementById(`radio_5` ).checked)  {Task_5  ();};
    if (document.getElementById(`radio_6` ).checked)  {Task_6  ();};
    if (document.getElementById(`radio_7` ).checked)  {Task_7  ();};
    if (document.getElementById(`radio_8` ).checked)  {Task_8  ();};
    if (document.getElementById(`radio_9` ).checked)  {Task_9  ();};
    if (document.getElementById(`radio_10`).checked)  {Task_10 ();};
    if (document.getElementById(`radio_11`).checked)  {Task_11 ();};
    if (document.getElementById(`radio_12`).checked)  {Task_12 ();};
  };

Task_1 = function ()
{
    let a = parseInt((document.getElementById(`text_1`).value),10);
    let b = parseInt((document.getElementById(`text_2`).value),10);
    if ( a > b )
      {
        document.getElementById(`message`).innerHTML=`${(a + b / 2 * 4)}`;   
      } else if ( a == b )
          {
            document.getElementById(`message`).innerHTML=`${400}`;  
          } else if ( a < b )
             {
               document.getElementById(`message`).innerHTML=`${(a - b + 2 / b * 4)}`;  
             };    
};

Task_2 = function ()
{

    //alert (`Task not implemented`);

    let x = parseInt((document.getElementById(`text_1`).value),10);
    let y = parseInt((document.getElementById(`text_2`).value),10);
    if ( y <= (4-x) && y <= (4+x) && y >= 0 )
      {
        document.getElementById(`message`).innerHTML=`Point in area`;       
      } else document.getElementById(`message`).innerHTML=`Point out of area`;

};  

Task_3 = function ()
{
    let a = parseInt((document.getElementById(`text_1`).value),10);
    switch (a)
      {
        case 1 : document.getElementById(`message`).innerHTML=`Monday`; break;
        case 2 : document.getElementById(`message`).innerHTML=`Tuesday`; break;
        case 3 : document.getElementById(`message`).innerHTML=`Wednesday`; break;
        case 4 : document.getElementById(`message`).innerHTML=`Thursday`; break;
        case 5 : document.getElementById(`message`).innerHTML=`Friday`; break;
        case 6 : document.getElementById(`message`).innerHTML=`Saturday`; break;
        case 7 : document.getElementById(`message`).innerHTML=`Sunday`; break;
       default : document.getElementById(`message`).innerHTML=`Unexpected data!`; break;
      };
};  

Task_4 = function ()
{
    let a = parseInt((document.getElementById(`text_1`).value),10);
    let b = parseInt((document.getElementById(`text_2`).value),10);
    if ( a > b)
      {
        document.getElementById(`message`).innerHTML=`${a}`;   
      } else if ( b > a )
          {
            document.getElementById(`message`).innerHTML=`${b}`;  
          } else
             {
               document.getElementById(`message`).innerHTML=`Unexpected data!`;  
             };
};  

Task_5 = function ()
{
    let a = parseInt((document.getElementById(`text_1`).value),10);
    let b = parseInt((document.getElementById(`text_2`).value),10);
    if ( a > b)
      {
        document.getElementById(`message`).innerHTML=`${a}`;   
      } else if ( b > a )
          {
            document.getElementById(`message`).innerHTML=`${b}`;  
          } else if ( a = b)
             {
               document.getElementById(`message`).innerHTML=`${a} = ${b}`;  
             } else
                 {
                    document.getElementById(`message`).innerHTML=`Unexpected data!`; 
                 }; 
};  

Task_6 = function ()
{
    let a = parseInt((document.getElementById(`text_1`).value),10);
    
    if ( a >= 1 && a <= 20 ) 
      {
        document.getElementById(`message`).innerHTML=`First range`;   
      } else if ( a >= 21 && a <= 48 )
          {
            document.getElementById(`message`).innerHTML=`Second range`;  
          } else if ( a >= 49 && a <= 90)
             {
               document.getElementById(`message`).innerHTML=`Third range`;  
             } else
                 {
                    document.getElementById(`message`).innerHTML=`Out of range!`; 
                 }; 
};  

Task_7 = function ()
{
    let a = document.getElementById(`text_1`).value;
    let b = document.getElementById(`text_2`).value;
    if ( a === `ivan` && b === `334455` ) 
      {
        document.getElementById(`message`).innerHTML=`Welcome`;   
      } else if ( a === `alex` && b === `777` )
          {
            document.getElementById(`message`).innerHTML=`Welcome`;  
          } else if ( a === `petr` && b === `b5678`)
             {
               document.getElementById(`message`).innerHTML=`Welcome`;  
             } else
                 {
                    document.getElementById(`message`).innerHTML=`Error!`; 
                 }; 
};  

Task_8 = function ()
{
    let a = parseInt((document.getElementById(`text_1`).value),10);
    
    if ( (2019 - a) >= 16) 
      {
        document.getElementById(`message`).innerHTML=`Welcome, you are ${(2019 - a)} years old!`;   
      } else
          {
            document.getElementById(`message`).innerHTML=`No entry!`;  
          } ;
};  

Task_9 = function ()
{
    let a = parseInt((document.getElementById(`text_1`).value),10);

    if ( a >= 0 && a <= 3 )
      {
        document.getElementById(`message`).innerHTML=`0%`;   
      } else if ( a >= 3 && a <= 10 )
          {
            document.getElementById(`message`).innerHTML=`10%`;  
          } else if ( 10 >= 0 && a <= 20 )
             {
               document.getElementById(`message`).innerHTML=`20%`;  
             } else if ( a >= 20) 
                 {
                    document.getElementById(`message`).innerHTML=`25%`;
                 };              
};  

Task_10 = function ()
{
  alert (`Task not implemented`);
};  

Task_11 = function ()
{
  document.getElementById(`message`).innerHTML=`Переучёт!`;
};  

Task_12 = function ()
{
  document.getElementById(`message`).innerHTML=`В автомате закончилось кофе!`;
};  