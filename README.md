
### StreamCOMMERCE
##### A Headless e-Commerce Platform Powered by MedusaJS

In the ever-evolving world of e-commerce, businesses are constantly on the lookout for innovative solutions to deliver exceptional online shopping experiences. The rise of headless e-commerce platforms has revolutionized the way companies build and manage their online stores. One such platform that has gained significant attention is StreamCOMMERCE, which is built on top of the powerful MedusaJS framework. In this article, we will explore the key features and advantages of StreamCOMMERCE as a headless e-commerce solution.

##### What is StreamCOMMERCE?
StreamCOMMERCE is an e-commerce platform that embraces the concept of headless architecture, separating the front-end presentation layer from the back-end business logic. It leverages MedusaJS, an open-source JavaScript framework specifically designed for building scalable and customizable e-commerce applications. With StreamCOMMERCE, businesses can create unique, branded, and immersive shopping experiences while enjoying the flexibility to adapt and integrate with various front-end technologies.

StreamCOMMERCE is an open-source commerce solution, offering reusable modules for bespoke applications, leveraging modern tech for scalability and control, ideal for brands seeking customization and innovation. stream-protocol/stream-commerce-apps 

##### Key Features of StreamCOMMERCE:
Headless Flexibility: StreamCOMMERCE allows businesses to decouple the front-end and back-end, enabling the freedom to build engaging user interfaces using any modern front-end technology such as React, Vue.js, or Angular. This flexibility empowers developers to craft highly tailored and optimized shopping experiences.

API-First Approach: As a headless e-commerce platform, StreamCOMMERCE adopts an API-first approach. It provides a comprehensive set of RESTful APIs and GraphQL endpoints, allowing easy access to all the core functionalities of the e-commerce system. This enables seamless integration with third-party services, applications, and channels, such as mobile apps, IoT devices, or voice assistants.

Scalability and Performance: Built on MedusaJS, StreamCOMMERCE is designed to handle high traffic volumes and scale effortlessly. It offers robust performance, ensuring fast page load times and optimized server responses. This scalability and performance make it suitable for businesses of all sizes, from small startups to enterprise-level operations.

Customization and Extensibility: StreamCOMMERCE provides a flexible architecture that allows businesses to tailor the platform to their specific requirements. It offers a wide range of customization options, from creating custom product types and attributes to defining complex pricing rules. Additionally, the platform supports the installation of custom apps and plugins, enabling businesses to extend the core functionality as needed.

Advanced Product Management: With StreamCOMMERCE, managing products becomes a breeze. The platform offers comprehensive tools for organizing catalogs, managing inventory, defining variants, handling SKUs, and applying pricing strategies. These features empower businesses to efficiently handle complex product structures and streamline their operations.

##### Advantages of StreamCOMMERCE:
Faster Time-to-Market: StreamCOMMERCE's headless architecture and modular design enable rapid development and deployment of e-commerce applications. With predefined business logic and easy-to-use APIs, developers can significantly reduce the time required to launch an online store, giving businesses a competitive edge.

Omnichannel Capabilities: By adopting a headless approach, StreamCOMMERCE enables businesses to deliver consistent shopping experiences across multiple touchpoints. Whether it's a website, mobile app, voice assistant, or IoT device, StreamCOMMERCE provides the necessary tools to create seamless omnichannel experiences, enhancing customer engagement and satisfaction.

Future-Proofing: As technology advances, businesses must adapt and evolve. StreamCOMMERCE future-proofs e-commerce operations by allowing businesses to leverage the latest front-end frameworks and emerging technologies without rebuilding the entire platform. This ensures scalability, flexibility, and longevity for e-commerce businesses in a rapidly changing digital landscape.

##### Conclusion:
StreamCOMMERCE, built on MedusaJS, offers a powerful and flexible headless e-commerce solution for businesses seeking to deliver exceptional online shopping experiences. With its headless architecture, API-first approach, and extensive customization capabilities, StreamCOMMERCE empowers businesses to create unique, branded, and scalable e-commerce applications. By leveraging StreamCOMMERCE's features and advantages, companies can stay ahead of the competition, engage customers across multiple channels, and drive business growth in the ever-evolving e-commerce landscape.

##### Applications demo
Backend/Admin: Medusa 

Storefront: Home | ACME 


<p align="center">
<a href="https://console.platform.sh/projects/create-project/?template=https://github.com/platformista/medusa/blob/main/template-definition.yaml&utm_campaign=deploy_on_platform?utm_medium=button&utm_source=affiliate_links&utm_content=https://github.com/platformista/medusa/blob/main/template-definition.yaml" target="_blank" title="Deploy with Platform.sh"><img src="https://platform.sh/images/deploy/deploy-button-lg-blue.svg"></a>
</p>

# StreamCOMMERCE (Medusa) for Platform.sh

- [Medusa](https://medusajs.com) Medusa is an open-source commerce solution, offering reusable modules for bespoke applications, leveraging modern tech for scalability and control, ideal for brands seeking customisation and innovation.
- [Platform.sh](https://platform.sh) is a horizontal polyglot PaaS that offers a unified, secure, enterprise-grade solution for responsibly building, running, and scaling fleets of websites and applications.

## Template

Platform.sh template offer a way to one-click install a working installation of an application or collection of applications. 

This template deploys:

- [The Medusa Backend](https://docs.medusajs.com/development/backend/install)
- [The Admin Dashboard](https://docs.medusajs.com/admin/quickstart)
- [The Next.js Storefront](https://docs.medusajs.com/starters/nextjs-medusa-starter)

## Seed data

After the first deployment, you might want to seed the database by running `yarn run seed` in the backend container.
To do this, you would ideally have the [Platform.sh CLI](https://github.com/platformsh/cli) installed. 

Then, you may run

```shell
$ platform ssh "corepack yarn run seed" -p <PROJECT_ID>  -e main -A backend
```

where `<PROJECT_ID>` is the unique identifier of the project you just deployed thanks to this template. You can access that information via the CLI or the Web Console. 

### Verify data presence

You can request `/store/products` from the backend to verify a list of products is now present.

## Access the Admin Dashboard

The dashboard is installed as plugin of the backend, and will be available at `/app` on the same domain as the backend.

If you installed the demo data as per above, you may now log in with the following credentials:

- email: `admin@medusa-test.com`
- password: `supersecret`

### Create a new user

To create a new admin user from the command line, run the following command in the directory holding your Medusa backend:

```shell
$ platform ssh "corepack yarn run medusa user -e some@email.com -p some-password" -p <PROJECT_ID>  -e main -A backend
```

This will create a new user that you can use to log into your admin panel.

## Special notes

- The present setup is [currently ignoring TypeScript typechecking](/blob/main/storefront/next.config.js#L10-L16) in the `storefront` application, because of [this issue](https://github.com/medusajs/medusa/issues/4060).
- In the backend, the `platformsh-config` library is now being used, and `STORE_CORS` is being set using it. My preferred way of doing this would be to do that in `.environment` (see relevant code currently commented out, because something is going wrong there).
- In the frontend, `.environment` has been added as a copy of the `.env` template provided. The `NEXT_PUBLIC_API_URL` is here being set using my preferred way of doing it, which is via bash scripting.
