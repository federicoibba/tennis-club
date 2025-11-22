# Preview Environment Setup

This project is configured with Gitpod Automations to automatically start both the backend and frontend servers when you open the environment.

## Automatic Services

The following services are configured to start automatically:

### Backend Server
- **Port**: 3000
- **Description**: Tennis Club Backend API Server (Hono + Node.js)
- **URL**: Automatically exposed as a public URL

### Frontend Dev Server
- **Port**: 5173
- **Description**: Tennis Club Frontend Application (React + Vite)
- **URL**: Automatically exposed as a public URL

## Managing Services

### View Service Status
```bash
gitpod automations service list
```

### Start Services
```bash
gitpod automations service start backend
gitpod automations service start frontend
```

### Stop Services
```bash
gitpod automations service stop backend
gitpod automations service stop frontend
```

### View Service Logs
```bash
gitpod automations service logs backend
gitpod automations service logs frontend
```

## Accessing Preview URLs

### List All Ports
```bash
gitpod environment port list
```

### Open a Port
```bash
gitpod environment port open <port> --name <name>
```

## Configuration Files

- `.ona/automations.yaml` - Defines the services and their startup commands
- `.gitpod.yml` - Configures port visibility and VS Code extensions

## Manual Start (Alternative)

If you prefer to start services manually, you can use:

```bash
# Start both services
npm start

# Or start individually
npm run dev --workspace=server
npm run dev --workspace=frontend
```

## Important Configuration

Both the backend and frontend are configured to bind to `0.0.0.0` to be accessible from external URLs:

- **Frontend**: `vite.config.ts` has `server.host: '0.0.0.0'`
- **Backend**: `server/src/index.ts` has `hostname: '0.0.0.0'`

This is required for Gitpod preview URLs to work properly.

## Troubleshooting

### Services Not Starting
1. Check service logs: `gitpod automations service logs <service-name>`
2. Verify Node.js is installed: `node --version`
3. Ensure dependencies are installed: `npm install`

### Port Not Accessible / Service Unavailable
1. **Check if server is binding to 0.0.0.0** (not just localhost)
   - Frontend: Verify `vite.config.ts` has `server.host: '0.0.0.0'`
   - Backend: Verify `server/src/index.ts` has `hostname: '0.0.0.0'`
2. Check if port is open: `gitpod environment port list`
3. Open port manually: `gitpod environment port open <port> --name <name>`
4. Verify service is running: `gitpod automations service list`
5. Restart the service: `gitpod automations service stop <name> && gitpod automations service start <name>`

### Updating Automations
After modifying `.ona/automations.yaml`:
```bash
gitpod automations validate
gitpod automations update -s .ona/automations.yaml
```
