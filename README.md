# NLW Connect Node

A Node.js project built with Fastify, Drizzle ORM, and Redis for managing event subscriptions and referral tracking.

## Description

This project provides an API for subscribing to events, tracking referral links, and managing a ranking system based on referrals. It uses Fastify for the server, Drizzle ORM for database interactions, and Redis for caching and ranking.

## Technology Stack

- **Node.js**: Runtime environment
- **Fastify**: Web framework
- **Drizzle ORM**: Database ORM
- **Redis**: Caching and ranking
- **TypeScript**: Programming language
- **Zod**: Schema validation


## API Endpoints

- **POST /subscriptions**: Add new subscribers to events
- **GET /invites/:subscriberId**: Access invite link and redirects user
- **GET /subscribers/:subscriberId/ranking/clicks**: Get subscriber invite clicks count
- **GET /subscribers/:subscriberId/ranking/count**: Get subscriber invite count
- **GET /subscribers/:subscriberId/ranking/position**: Get subscriber ranking position
- **GET /ranking**: Get ranking