- Some common steps in a CI setup include linting, testing, and building. 
  What are the specific tools for taking care of these steps in the ecosystem of the language you picked?

	- I chose Ruby and for it the tool thats recommended for linting seems to be RuboCop.
	- Testing could be done with Minitest or RSpec. I would go with Minitest since it comes installed with rails and 	  	  looks like it is not any harder to use or that performance would be worse than that of RSpecs. 
	- I can't find much on building but one tool i found is rake.
	

- What alternatives are there to set up the CI besides Jenkins and GitHub Actions?
	- Other platforms include atleast Travis CI, CircleCi, Codeship, Concourse CI and Buddy
	


- Would this setup be better in a self-hosted or a cloud-based environment? Why? 
  What information would you need to make that decision?
	- cloud-based environment

	- The size of project is not specified but if there is one team of 6 i would assume that there is no need for self-	  	  	  hosted CI setup.
	  
	- Except if there is need for some special task that cloud platform isn't build for or if project is too resource heavy.

Text might fall a bit short but it looks like there's not much recommended choices when setting up ruby.

	