# IB.ai API and Web Interface

The Docker container should be networked into the IB.ai compose 
network in order to access the Redis database. The name of the Redis 
service should then be supplied as the REDIS_HOST in the environment 
variables.

To supply a specific docker-compose file to `up --build`, provide the 
`-f <compose_name>` flag.

## License

This project is licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl.html).    
This license is copy-left and conducive to free, open-source software.

Project license: https://github.com/vardy/Examiner.ai/blob/master/LICENSE.md    
License details: https://choosealicense.com/licenses/gpl-3.0/#
