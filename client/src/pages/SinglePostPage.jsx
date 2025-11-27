import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8 mb-15">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Facere, aut.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum itaque quae expedita, repellat ea consequuntur cum pariatur sunt numquam ducimus impedit autem quisquam. Ea eligendi, fuga adipisci amet voluptates libero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus maiores doloribus in. Temporibus dolores blanditiis, ducimus suscipit in autem tenetur corporis doloremque necessitatibus sunt neque maxime ratione nulla omnis ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perferendis laudantium repellat voluptatum dolorem voluptatibus culpa nam mollitia architecto ut rerum tempora veniam accusamus, dicta expedita amet ullam? Eos voluptas nemo quas ratione nisi amet accusamus eum ducimus expedita doloribus.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-xl"/>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6         text-justify">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsam, quisquam nulla maxime officiis blanditiis repellendus doloremque odit magnam optio modi voluptate! Eos ea quis quo aliquid, ullam corporis alias sequi in commodi consectetur culpa quas adipisci exercitationem voluptates? Quia aliquid sequi aut inventore culpa iste tempore, iure quis explicabo!
          </p>
          </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">

          <div className="flex items-center gap-8">
            <Image 
            src="userImg.jpeg"
            className="w-12 h-12 rounded-full object-cover"
            w="48"
            h="48"
            />
            <Link>John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur?</p>
            <div className="flex gap-2">
              <Link>
              <Image src="facebook.svg"/>
              </Link>
              <Link>
              <Image src="instagram.svg"/>
              </Link>
            </div>
            </div>
          <PostMenuActions/>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link to="/" className="underline">Web Design</Link>
            <Link to="/" className="underline">Development</Link>
            <Link to="/" className="underline">Databases</Link>
            <Link to="/" className="underline">Search Engines</Link>
            <Link to="/" className="underline">Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>
  );
}

export default SinglePostPage;
