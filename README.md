# WorkDayScheduler
```
Fifth Callenge. Due date: 30th of January 2022.
```

## Goal of the Project
***
```
To create a simple workday schedule form 9am to 5pm.
```

## User Story
***
```
As an employee with a busy schedule
I want to add important events to a daily planner
so that I can manage my time effectively.
```

## Criteria For Completion
***
```
1. The planner shows the current date at the top.
2. There are hourly time block to add tasks.
3. Each task is colour coded depending of its hour block compared to the current hour.
Red = past task, Yellow = current task, and Green = future task.
4. Double cliking on a time block, allows you to enter/edit tasks.
5. Clicking the save button at the right side of the task, saves the task to localStorage.
6. Saved tasks are presented upon tab refresh.
```

## Completion
***
The steps I took to coplete this challenge were:
- Added the starter code to the repository.
- Added the date/time at near the top of the page.
![Preview of the web site. Question.](https://github.com/NicolasRojas-CENG/WorkDayScheduler/blob/a6b66970960d5a9c9cec78af1c0bd6c413c23ead/assets/images/currentDay.PNG "Preview of the web site. Date.")
- Added the time blocks for each hourly task.
   - They started as a 12 hour clock, but was later changed to a 24 hour clock.
![Preview of the web site. Question.](https://github.com/NicolasRojas-CENG/WorkDayScheduler/blob/a6b66970960d5a9c9cec78af1c0bd6c413c23ead/assets/images/hourlyTasks.PNG "Preview of the web site. Hourly tasks.")
- Created the colour coding of tasks.
   - This is updated every 5 minutes.
- Added the ability to edit tasks.
   - At this point, they do not save.
![Preview of the web site. Timer.](https://github.com/NicolasRojas-CENG/WorkDayScheduler/blob/a6b66970960d5a9c9cec78af1c0bd6c413c23ead/assets/images/taskEdit1.PNG "Preview of the web site. Editing tasks.")
![Preview of the web site. Timer.](https://github.com/NicolasRojas-CENG/WorkDayScheduler/blob/a6b66970960d5a9c9cec78af1c0bd6c413c23ead/assets/images/taskEdit2.PNG "Preview of the web site. Editing tasks.")
   - The task changed from '1' to 'One'.
- Saved the user tasks to the localStorage.
   - Retreived the stored task values.
![Preview of the web site. Score.](https://github.com/NicolasRojas-CENG/WorkDayScheduler/blob/a6b66970960d5a9c9cec78af1c0bd6c413c23ead/assets/images/savingTasks.PNG "Preview of the web site. Saved tasks.")
   - Each hour block has its own entry in the localStorage.
- Styled the website.
![Preview of the web site. Score.](https://github.com/NicolasRojas-CENG/WorkDayScheduler/blob/a6b66970960d5a9c9cec78af1c0bd6c413c23ead/assets/images/styling.PNG "Preview of the web site. Saved tasks.")

## Preview of the web site
![Preview of the web site. Instruction screen.](https://github.com/NicolasRojas-CENG/JavaScript_Quiz/blob/e38afc8f6c0f1e0e08780608aaa4850ab96542bc/resources/images/final_instructionScreen.PNG "Preview of the web site. Instruction screen.")
![Preview of the web site. Quiz screen.](https://github.com/NicolasRojas-CENG/JavaScript_Quiz/blob/e38afc8f6c0f1e0e08780608aaa4850ab96542bc/resources/images/final_quizScreen.PNG "Preview of the web site. Quiz screen.")
![Preview of the web site. Results screen, no name entered.](https://github.com/NicolasRojas-CENG/JavaScript_Quiz/blob/e38afc8f6c0f1e0e08780608aaa4850ab96542bc/resources/images/final_resultsScreen_noName.PNG "Preview of the web site. Results screen, no name entered.")
![Preview of the web site. Results screen, name entered.](https://github.com/NicolasRojas-CENG/JavaScript_Quiz/blob/e38afc8f6c0f1e0e08780608aaa4850ab96542bc/resources/images/final_resultsScreen_yesName.PNG "Preview of the web site. Results screen, name entered.")
![Preview of the web site. Scores screen, no scores saved.](https://github.com/NicolasRojas-CENG/JavaScript_Quiz/blob/370efff905cfdff77d1e80dd17cd5d88cf48eb67/resources/images/final_scoreScreen_noScore.PNG "Preview of the web site. Scores screen, no scores saved.")
![Preview of the web site. Scores screen, scores saved.](https://github.com/NicolasRojas-CENG/JavaScript_Quiz/blob/370efff905cfdff77d1e80dd17cd5d88cf48eb67/resources/images/final_resultsScreen_yesName.PNG "Preview of the web site. Scores screen, scores saved.")

## Completed web application
***
[Click here to view the final result of the web application.](https://nicolasrojas-ceng.github.io/WorkDayScheduler/ "Work Day Scheduler")
