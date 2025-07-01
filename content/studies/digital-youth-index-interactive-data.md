---
title: 'Digital Youth Index interactive data'
description: 'A case sudy around interactive data visualisation for researchers finding data on digital poverty in the UK'
---

## The context

Nominet’s Social Impact team had a tool which they had designed called [Digital Youth Index](https://digitalyouthindex.uk/). It had been constructed with the help of an external digital agency. Its purpose was to filter and display data from a large dataset to answer specific questions about how young people used digital technology and to explore digital poverty.

The team were in the middle of receiving feedback from internal users. They had collected together a list of tasks that they wanted users to perform and the results would form actionable feedback around which areas of the tool to prioritise with the agency.

The users attended a session with the project stakeholders, were asked to perform the tasks within a time limit.

The team had summarised the raw data and added some of their own qualitative findings from while they were running the session.

## The initial problem

The data provided by the tool was viewed generally as good and useful. However…

- Users reported that the filtering was difficult to both find and use - a key feature of this tool so this needed urgently looking at. One issue was that the tab on the side used unfriendly wording and was not obvious enough.
- Users reported that too little of the screen real estate was used for showing the actual graph and that too much scrolling was required to actually see the visualisations.
- Users reported that the tool was slow to update data and data changed in the middle of using the filter rather than a filter being applied.

The project team reported that the tasks proved to be quite challenging. One quote was “Lots of frowning and concentration throughout indicated that the tasks were not easy or intuitive for many of those present and 11 out of 16 were unable to complete the tasks within the time given.”

Since all of this was using public benefit company money, the budgets were SUPER tight so not many changes could be made - either lots of easy, small wins or a couple of big ticket items.

![Screenshot to illustrate that the visualisation required scrolling to actually see the data and that too much of the screen was being used inefficiently](/img/Untitled.png)

> Screenshot to illustrate that the visualisation required scrolling to actually see the data and that too much of the screen was being used inefficiently

## The proposals

I took an approach of dealing with some of the feedback through the lens of UX best practice. Since I wouldn’t be doing the large parts of the work, I had to explain these in a way that would be easy for our team to understand and then convey back to their agency.

I started by taking a summary of the feedback the DYI team received and made some bullet points for how some of these issues could be addressed.

For some of the layout issues, I made some lo-fi sketches in Miro to illustrate how some elements could be moved without too much new code - purely from a viewpoint of UX best practice and the feedback from the tasks.

I presented these to the DYI team at Nominet and they seemed happy. They also shared with me some of the ideas from their digital agency, which were reassuringly similar.

![Lo fidelity sketch to quickly convey ideas around how the layout of the graphs could change from the screenshot earlier - more of the graph visible above the fold, vertical bars by default, question selectors laid out horizontally](/img/Screenshot_2024-03-15_at_15.56.39.png)

Lo fidelity sketch to quickly convey ideas around how the layout of the graphs could change from the screenshot earlier - more of the graph visible above the fold, vertical bars by default, question selectors laid out horizontally

## The outcomes

The main points of change were:

- accessible colours ALWAYS used for the graphs rather than be an option
- horizontally laid out question selectors to maximise available screen real estate
- a loading spinner whenever the graph filters change
- more visible filter starting points

![The result of the UX work! a much easier to navigate graph, more real estate given to visualisations, questions displayed horizontally, and follows the feedback which was given.](/img/Screenshot_2024-03-27_at_16.52.43.png)

The result of the UX work! a much easier to navigate graph, more real estate given to visualisations, questions displayed horizontally, and follows the feedback which was given.

The main takeaway for the team was that they now had a tool which addressed many if not all of the feedback points they had received. The digital agency came back to them with an improved tool which does a much better job - not perfect but a good start

## Next steps

We now need to get feedback from users on this new design, validate it is still working for them and see where further improvements can be made. There has already been an uptick in traffic since this went live!