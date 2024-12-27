# Real-Time Chat Application with Full DevOps Pipeline

A modern, responsive real-time chat application built with a comprehensive DevOps infrastructure, implementing industry best practices for deployment, scaling, and monitoring.

## 🚀 Features

- **Real-Time Communication**
  - Instant messaging with WebSocket integration
  - Message delivery status and read receipts
  - Online/offline user status
  - File sharing and emoji support

- **Modern UI/UX**
  - Responsive design for all devices
  - Dark/Light theme support
  - Intuitive user interface
  - Real-time notifications

- **Security**
  - JWT-based authentication
  - Role-based authorization
  - End-to-end encryption
  - Rate limiting and DDoS protection

## 🛠 Tech Stack

### Frontend
- Vue.js 3 with Composition API
- Nuxt.js for SSR
- TailwindCSS for styling
- Socket.io client for real-time features

### Backend
- Node.js/Express.js
- MongoDB for database
- Socket.io for WebSocket
- Redis for caching

### DevOps & Infrastructure

#### Container Orchestration
- **Docker** - Containerization
  - Multi-stage builds
  - Optimized images
  - Docker Compose for local development

- **Kubernetes**
  - High availability deployment
  - Auto-scaling
  - Load balancing
  - Rolling updates
  - Secrets management

#### CI/CD Pipeline
- **Jenkins**
  - Automated build pipeline
  - Unit/Integration testing
  - Security scanning
  - Automated deployments

- **Ansible**
  - Infrastructure automation
  - Configuration management
  - Application deployment
  - Security compliance

#### Infrastructure as Code
- **Terraform**
  - AWS infrastructure provisioning
  - Network configuration
  - Security groups
  - Auto-scaling groups

#### Monitoring & Observability
- **Grafana**
  - Real-time metrics visualization
  - Custom dashboards
  - Alert management
  - Performance monitoring

#### Cloud Infrastructure (AWS)
- EKS for Kubernetes
- RDS for database
- ElastiCache for Redis
- CloudFront for CDN
- Route53 for DNS
- S3 for storage

## 📡 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
  - Body: `{ username, email, password }`
  - Returns: User object with JWT token

- `POST /api/auth/login` - User login
  - Body: `{ email, password }`
  - Returns: JWT token and user details

### Chat Endpoints
- `GET /api/messages` - Fetch message history
  - Query params: `{ limit, offset, roomId }`
  - Returns: Array of messages

- `POST /api/messages` - Send a new message
  - Body: `{ content, roomId, attachments? }`
  - Returns: Created message object

- `GET /api/rooms` - Get user's chat rooms
  - Returns: Array of room objects

- `POST /api/rooms` - Create a new chat room
  - Body: `{ name, participants }`
  - Returns: Created room object

### WebSocket Events
- `message:new` - Emitted when a new message is sent
- `user:typing` - Emitted when a user is typing
- `user:status` - Emitted when user status changes
- `room:join` - Emitted when user joins a room

## 🧪 Testing Strategy

### Jest Testing Setup
The project uses Jest for both frontend and backend testing. Tests are organized in the following structure:

```
├── __tests__/
│   ├── unit/
│   │   ├── components/
│   │   ├── services/
│   │   └── utils/
│   ├── integration/
│   └── e2e/
```

### Running Tests
```bash
# Run all tests
npm run test

# Run unit tests only
npm run test:unit

# Run with coverage report
npm run test:coverage
```

### Test Categories

#### Unit Tests
- Component testing using Vue Test Utils
- Service layer testing
- Utility function testing
- API endpoint testing

#### Integration Tests
- API route integration
- Database operations
- WebSocket communication
- Authentication flow

#### E2E Tests
- User journey testing
- Cross-browser compatibility
- Performance testing

### Test Coverage Goals
- Unit Tests: 80% coverage
- Integration Tests: 70% coverage
- Critical paths: 100% coverage

### Testing Best Practices
- Use meaningful test descriptions
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test edge cases and error scenarios
- Keep tests independent and isolated

## 🚀 Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js >= 16
- MongoDB
- AWS CLI configured

### Local Development
1. Clone the repository
   ```bash
   git clone git@github.com:SophaHum/full-stack-ci-cd.git
   ```

2. Start the development environment
   ```bash
   docker-compose up -d
   ```

3. Access the application
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - MongoDB Admin: http://localhost:8081
     - Username: admin
     - Password: pass

### Production Deployment

1. Configure AWS credentials
2. Initialize Terraform
   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

3. Deploy to Kubernetes
   ```bash
   kubectl apply -f k8s/
   ```

## 📈 DevOps Pipeline Flow

1. **Development**
   - Feature branch creation
   - Local testing with Docker Compose
   - Code quality checks

2. **Continuous Integration**
   - Jenkins pipeline triggers on push
   - Automated tests
   - Security scanning
   - Docker image building

3. **Continuous Deployment**
   - Ansible playbooks for configuration
   - Terraform for infrastructure
   - Kubernetes deployment
   - Zero-downtime updates

4. **Monitoring**
   - Grafana dashboards
   - Performance metrics
   - Error tracking
   - User analytics

## 🔒 Security Measures

- SSL/TLS encryption
- JWT authentication
- Rate limiting
- Input validation
- XSS protection
- CSRF protection
- Security headers
- Regular security audits

## 📊 Monitoring & Alerts

- Application metrics
- Infrastructure health
- Error rates
- Response times
- Resource utilization
- Custom alert thresholds

## 🔄 Scaling Strategy

- Horizontal pod autoscaling
- Database replication
- Redis clustering
- CDN integration
- Load balancing
- Cache optimization

## 📝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Support

For support, email sopha.humm@gmail.com.