A = Analysis View
E = Eval View
D = Design View

* populate Rightbox and Leftbox with placeholders for all the modules
* A: Build the Video Inspector
  * Show 3 videos in analysis view, along with the timeline plot
* E: Hook up flask app to progress bar
* E: Disable "next" button until questions are answered AND flask has returned
* (E,A): make non-editable car svg for viewing
* D: move feature icons to RightBox
* (D,E): create radar plot for car config
* Add a feature in flaskapp to train agent (controller only) and return path to retrained file
* Add reducers, etc. to store trained pt files etc. in the state associated with the current design
* D: cleanup test drive button
* D: move Info and SubmitDesign buttons to top right corner (and modify final study questions)
* D: add a button that links to analysis page but it is grayed out if there have been no tested designs yet
* A: Hookup interaction buttons as described below


Go: Train the driver with the current design for a fixed, predetermined number of episodes
Undo: replace with a toggle between trained and untrained, and remove the go button after agent is trained once
+add video: we think means do another test drive (but we're not sure)
The video list shows all the videos for this design/agent
selecting a new design in the scatterplot should pull up the video list for that point, and default to the video associated with the clicked on point