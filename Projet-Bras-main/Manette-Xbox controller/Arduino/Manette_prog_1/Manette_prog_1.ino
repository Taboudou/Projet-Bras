
#include <XInput.h>
 #include <Usb.h>
 



  // Sample arcade joystick inputs
  boolean stickUp = false;
  boolean stickDown = true;
  boolean stickLeft = false;
  boolean stickRight = true;

 
  
void setup() {
  XInput.setAutoSend(false);  // disable automatic output
  XInput.begin();
}
 
void loop() {
  ...  // Update control surfaces here
  XInput.send();  // send data over USBXInput.press(BUTTON_A);  // press 'A'
  XInput.release(BUTTON_B);  // release 'B'
 
  boolean yState = digitalRead(ButtonPin);
  XInput.setButton(BUTTON_X, yState); 
  XInput.setJoystick(JOY_LEFT, 0, 0);
  
  // Push the right joystick all the way to the right
  // and slightly down
  XInput.setJoystick(JOY_RIGHT, 32767, -2000); 
  
  XInput.setJoystickX(JOY_LEFT, 0);
 
  // Move the right joystick's Y axis to full 'up'
  XInput.setJoystickY(JOY_RIGHT, 32767);
  XInput.setJoystick(JOY_LEFT, stickUp, stickDown, stickLeft, stickRight);
}

 
