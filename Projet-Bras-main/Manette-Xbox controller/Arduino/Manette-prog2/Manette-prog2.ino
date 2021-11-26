#include 
#ifdef dobogusinclude
#include&lt; 
#endif
#include 
#include <Usb.h> 
//above 5 lines from org
 
USB Usb;
XBOXRECV Xbox(&amp;Usb);
Servo servo1;
int var1; //retrieves xbox analog values right
int var2; //maps xbox analog to servo values right
int var3; // incremental control
 
 
void setup()
{
  
  Serial.begin(115200);
  while(!Serial); // wait for serial port to connect
  if (Usb.Init() == -1) {
    Serial.print(F("\r\n0SC did not start"));
    while (1); //halt
  }
  Serial.print(F("\r\nXbox Wireless Receiver Library Iniated"));
  pinMode(9, OUTPUT);
  servo1.attach(9);
}
 
void loop()
{
  
  Usb.Task();
    for (uint8_t i = 0; i &lt; 4; i++) {
      if (Xbox.Xbox360Connected[i]) {
        
     //by definition from orginal code
        if (Xbox.getAnalogHat(i,LeftHatX)){              //Original Defintion
 
              var1 =Xbox.getAnalogHat(i,LeftHatX);       //Var1 gets the org. def
              var2 = map(var1, 0, 255, 0, 79);            //Var2 converts this code to a useable servo control
               
              servo1.write(var2);
        }
                                  
            Serial.print(F("LeftHatX: "));
            Serial.print(Xbox.getAnalogHat(i,LeftHatX));
            Serial.print("\t");
            
            
            /*This Code Completes the Objective to move the servo to a specific location and hold it there
            but here are the issues :
 
1] Control too sensitive
2] Jittering occurs
3] No speed control
4] Must move joystick slowly to output accurate movements
 
*/
          }
 
          
    }
}
