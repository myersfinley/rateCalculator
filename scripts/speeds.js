/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
    clickResult();
    
});

clickResult = function(){
    /*Sets window to predetermined size, will ensure correct div positioning*/
    window.resizeTo(700, 700);
    $(".choices li").mousedown(function(){
        $(this).css('background-color', 'goldenrod');
        
        var choice = $(this).attr('id');
     
        if(choice == "drillChoice")
            {
              makeDrill();
            }
        else if(choice == "millChoice")
            {
              makeMill();
            }
        else if(choice == "turnChoice")
            {
              makeTurn();
            }
        else if(choice == "boreChoice")
            {
              makeBore();
            }
         else if(choice == "reamChoice")
            {
               makeReam();
            }
        else
            {
                makePart();
            }
    });
    
    $(".choices li").mouseup(function(){
       $(this).css('background-color', 'white'); 
    });
}


var makeMill = function(){
    $('.workSpace').empty();
    
    $('.workSpace').append(millText);
    
    $('.main').css('margin-top', '50px');
    
     
    
    $('.workSpace').keyup(function(event){
        if(event.keyCode == 13){
            var material = '';
            
            $("select option:selected").each(function(){
                material = $(this).text();
            });
           
            var diameter = $('input').val();
        
            millCompute(diameter, material);
        }
    });
}

var makeDrill = function(){
   
    $('.workSpace').empty();
   
    $('.workSpace').append(drillText);
    
    $('.main').css('margin-top', '50px');
    
    $('.workSpace').keyup(function(event){
        if(event.keyCode == 13){
            var material = '';
            
            $("select option:selected").each(function(){
                material = $(this).text();
            });
           
            var diameter = $('input').val();
            
            drillCompute(diameter, material);
        }
    });
}

var makeBore = function(){
    $('.workSpace').empty();
    
    $('.workSpace').append(boringText);
    
    $('.workSpace').keyup(function(event){
        if(event.keyCode == 13){
            var material = '';
            
            $("select option:selected").each(function(){
                material = $(this).text();
            });
           
            var diameter = $('input').val();
            
            boreCompute(diameter, material);
        }
    });
}

var makeTurn = function(){
    $('.workSpace').empty();
    
    $('.workSpace').append(turningText);
    
    $('.workSpace').keyup(function(event){
        if(event.keyCode == 13){
            var material = '';
            
            $("select option:selected").each(function(){
                material = $(this).text();
            });
           
            var diameter = $('input').val();
            
            turnCompute(diameter, material);
        }
    });
}

var makeReam = function(){
    $('.workSpace').empty();
    
    $('.workSpace').append(reamingText);
    
    $('.main').css('margin-top', '50px');
    
    $('.workSpace').keyup(function(event){
        if(event.keyCode == 13){
            var material = '';
            
            $("select option:selected").each(function(){
                material = $(this).text();
            });
           
            var diameter = $('input').val();
            
            reamCompute(diameter, material);
        }
    });
}

var makePart = function(){
    $('.workSpace').empty();
    
    $('.workSpace').append(partText);
    
     $('.main').css('margin-top', '50px');
    
    $('.workSpace').keyup(function(event){
        if(event.keyCode == 13){
            var material = '';
            
            $("select option:selected").each(function(){
                material = $(this).text();
            });
           
            var diameter = $('input').val();
            
            partCompute(diameter, material);
        }
    });
}


var drillCompute = function(diameter, material){
    if(material == "Choose Material Type")
        {
            window.alert("Please select a material type.");
        }
    else if(material == "Non-Ferrous (Aluminum, Brass, etc.)")
        {
            
        }
    else if(material == "Steel")
        {
            
        }
    else if(material == "Plastic")
        {
            
        }
    else
        {
            
        }
}

var millCompute = function(diameter, material){
     if(material == "Choose Material Type")
        {
            window.alert("Please select a material type.");
        }
    else if(material == "Non-Ferrous (Aluminum, Brass, etc.)")
        {
            
        }
    else if(material == "Steel")
        {
            
        }
    else if(material == "Plastic")
        {
            
        }
    else
        {
            
        }
}

var turnCompute = function(diameter, material){
     if(material == "Choose Material Type")
        {
            window.alert("Please select a material type.");
        }
    else if(material == "Non-Ferrous (Aluminum, Brass, etc.)")
        {
            
        }
    else if(material == "Steel")
        {
            
        }
    else if(material == "Plastic")
        {
            
        }
    else
        {
            
        }
}

var reamCompute = function(diameter, material){
     if(material == "Choose Material Type")
        {
            window.alert("Please select a material type.");
        }
    else if(material == "Non-Ferrous (Aluminum, Brass, etc.)")
        {
            
        }
    else if(material == "Steel")
        {
            
        }
    else if(material == "Plastic")
        {
            
        }
    else
        {
            
        }
}

var partCompute = function(diameter, material){
     if(material == "Choose Material Type")
        {
            window.alert("Please select a material type.");
        }
    else if(material == "Non-Ferrous (Aluminum, Brass, etc.)")
        {
            resultValue = "4";
            
            document.getElementById("return").innerHTML = resultValue;
        }
    else if(material == "Steel")
        {
            
        }
    else if(material == "Plastic")
        {
            
        }
    else
        {
            
        }
}

var boreCompute = function(diameter, material){
     if(material == "Choose Material Type")
        {
            window.alert("Please select a material type.");
        }
    else if(material == "Non-Ferrous (Aluminum, Brass, etc.)")
        {
            
        }
    else if(material == "Steel")
        {
            
        }
    else if(material == "Plastic")
        {
            
        }
    else
        {
            
        }
}

/*HTML to be added for milling operation*/
var millText = "<div class= 'workTime'><div class='material'><div class='main'>Material</div><div class= 'materialInput'><select class='materials'><option value='open'>Choose Material Type</option><option value='aluminum'>Non-Ferrous (Aluminum, Brass, etc.)</option><option value='Steel'>Steel</option><option value='plastic'>Plastic</option><option value= 'Stainless Steel'>Stainless Steel</option></select></div></div><div class= 'diameter'><div class='main'>D</div><div class='explanation'>(Diameter of end mill in inches)</div><div class= 'diameterInput'><input class='diameterChoice'></div></div><div class= 'return'><div class='main'>Approx. RPM</div><div class='explanation'></div><div class='returnValue'><output></div></div></div>";

/*HTML to be added for turning operation*/
var turningText = "<div class= 'workTime'><div class='material'><div class='main'>Material</div><div class= 'materialInput'><select name='materials'><option value='open'>Choose Material Type</option><option value='aluminum'>Non-Ferrous (Aluminum, Brass, etc.)</option><option value='Steel'>Steel</option><option value='plastic'>Plastic</option><option value= 'Stainless Steel'>Stainless Steel</option></select></div></div><div class= 'diameter'><div class='main'>D</div><div class='explanation'>(Diameter of stock in inches)</div><div class= 'diameterInput'><input></div></div><div class= 'return'><div class='main'>Approx. RPM</div><div class='explanation'></div><div class='returnValue'><output></div></div><div class='feedRates'>Recommended Lathe Feed Rates</div><div class='feedResponse'><div class='roughing'>Roughing<output class='secondary'></div><div class='finishing'>Finishing<output class='secondary'></div></div></div>";

/*HTML to be added for boring operation*/
var boringText = "<div class= 'workTime'><div class='material'><div class='main'>Material</div><div class= 'materialInput'><select name='materials'><option value='open'>Choose Material Type</option><option value='aluminum'>Non-Ferrous (Aluminum, Brass, etc.)</option><option value='Steel'>Steel</option><option value='plastic'>Plastic</option><option value= 'Stainless Steel'>Stainless Steel</option></select></div></div><div class= 'diameter'><div class='main'>D</div><div class='explanation'>(Diameter of hole in inches)</div><div class= 'diameterInput'><input></div></div><div class= 'return'><div class='main'>Approx. RPM</div><div class='explanation'></div><div class='returnValue'><output></div></div><div class='feedRates'>Recommended Lathe Feed Rates</div><div class='feedResponse'><div class='roughing'>Roughing<output class='secondary'></div><div class='finishing'>Finishing<output class='secondary'></div></div></div>";

/*HTML to be added for reaming operation*/
var reamingText = "<div class= 'workTime'><div class='material'><div class='main'>Material</div><div class= 'materialInput'><select name='materials'><option value='open'>Choose Material Type</option><option value='aluminum'>Non-Ferrous (Aluminum, Brass, etc.)</option><option value='Steel'>Steel</option><option value='plastic'>Plastic</option><option value= 'Stainless Steel'>Stainless Steel</option></select></div></div><div class= 'diameter'><div class='main'>D</div><div class='explanation'>(Diameter of hole in inches)</div><div class= 'diameterInput'><input></div></div><div class= 'return'><div class='main'>Approx. RPM</div><div class='explanation'></div><div class='returnValue'><output id='return'></div></div></div>";

/*HTML to be added for drilling operation*/
var drillText = "<div class= 'workTime'><div class='material'><div class='main'>Material</div><div class= 'materialInput'><select name='materials'><option value='open'>Choose Material Type</option><option value='aluminum'>Non-Ferrous (Aluminum, Brass, etc.)</option><option value='Steel'>Steel</option><option value='plastic'>Plastic</option><option value= 'Stainless Steel'>Stainless Steel</option></select></div></div><div class= 'diameter'><div class='main'>D</div><div class='explanation'>(Diameter of drill in inches)</div><div class= 'diameterInput'><input></div></div><div class= 'return'><div class='main'>Approx. RPM</div><div class='explanation'></div><div class='returnValue'><output></div></div></div>";

/*HTML to be added for parting operation*/
var partText =  "<div class= 'workTime'><div class='material'><div class='main'>Material</div><div class= 'materialInput'><select name='materials'><option value='open'>Choose Material Type</option><option value='aluminum'>Non-Ferrous (Aluminum, Brass, etc.)</option><option value='Steel'>Steel</option><option value='plastic'>Plastic</option><option value= 'Stainless Steel'>Stainless Steel</option></select></div></div><div class= 'diameter'><div class='main'>D</div><div class='explanation'>(Diameter of stock in inches)</div><div class= 'diameterInput'><input></div></div><div class= 'return'><div class='main'>Approx. RPM</div><div class='explanation'></div><div class='returnValue'><output id='return'></div></div></div>";