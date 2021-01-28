# game-of-logic
An implementation of Lewis Caroll's Game of Logic. 
You can try out a live version here: https://dmackinnon1.github.io/game-of-logic/

Carrol introduced the game in a book by the same name, which is available here: https://www.gutenberg.org/files/4763/4763-h/4763-h.htm.

A nice online resource for learning more about Lewis Caroll's Game of Logic is here: https://lewiscarrollresources.net/gameoflogic/index.html.

In this implementation of the Game of Logic, syllogisms are solved by placing 'tokens' are placed by clicking the circles shown in each region.
- A white circle indicates that the value for the region is "unknown."
- A grey circle indicates that there are "none" in that region.
- A black circle indicates there are "some" in that region.

The verision of the Game of Logic here does not allow for "on the fence" placements of tokens, so you need to apply tokens in an order that avoids ambiguity: you need to place the "None" tokens (grey) before you can place the "Some" tokens (black). In Caroll's original, he suggested placing black ("some") tokens between regions (on the fence) if their placement was ambiguous - subsequent placement of grey ("none") tokens would push the black token off the fence into one of the regions.

