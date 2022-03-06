# SmartHomeDemo
Smart home demo web page created using react and framer motion. control over room electronics.

    The app structure:
      nav bar:
        -room addition (+) and the rooms you created
      main page:
        -in the main page you will be welcomed by a room creation (name color type) and a button to create the room
        -upon completion you will create a new empty room that will show up in the nav bar
      room pages:
        -in the room page you will have the room name, type, color and + button to add your electronics
        -when you press the + button a pop up will show telling you to choose a device that you want to add (heater(only in bathrooms), ac, stereo and light)
        -when you add the device you will be able to turn on/off the device turning on will change the background to grey and a looping animation will start
        -leaving the room with a device on and coming back to it will change the background color of the device to a stronger grey then before to indicate the device was on from before
        -you can add only up to 5 devices in a room
