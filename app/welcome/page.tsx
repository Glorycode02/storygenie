"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle, CardHeader, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Welcome = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <div>
            <div className="container mx-auto flex justify-between items-center">
                <div className="mt-10">
                    <h2 className="font-bold text-2xl">Story <span className="text-green-600">Genie</span> </h2>
                </div>
                <div className="flex items-center gap-3 mt-10">
                    <Link href="/create-story">
                        <Button className="text-white bg-green-600">Create story +</Button>
                    </Link>
                    <div className="relative">
                        <Image
                            src="/images/prof.webp"
                            width={50}
                            height={50}
                            alt="Profile"
                            className="w-10 h-10 rounded-full cursor-pointer"
                            onClick={() => setShowDropdown(!showDropdown)}
                        />
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Profile
                                </Link>
                                <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Settings
                                </Link>
                                <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center">
                <h1 className="text-4xl font-bold mb-4">Show casing Stories</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Here are some of the amazing stories created with Story Genie. Explore and get inspired by the creativity of our community.
                </p>
                <div className="flex justify-center mb-8">
                    <Input
                        type="text"
                        placeholder="Search stories..."
                        className="border border-gray-300 rounded-full px-4 py-7 w-1/2 focus:ring-green-500 "
                    />
                </div>
                <div className='flex justify-between container mx-auto'>
                    <div />
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Tech</SelectItem>
                            <SelectItem value="dark">Ai</SelectItem>
                            <SelectItem value="system">Health</SelectItem>
                            <SelectItem value="system">Bible</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='container mx-auto grid grid-cols-4'>
                    <Card>
                        <CardHeader>
                            <CardTitle className='font-bold'>Super Heroes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/images/prof.webp"
                                width={300}
                                height={200}
                                alt="Story Image"
                                className="w-full h-auto rounded-lg"
                            />
                            <CardDescription className="mt-4">
                                This is a brief description of the story. It gives an overview of what the story is about.
                            </CardDescription>
                            <p className="mt-2 text-sm text-gray-500 text-start">#Category</p>
                        </CardContent>
                        <CardFooter>
                            <Link href="/view-story">
                                <Button className="text-white bg-green-600">View More</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default Welcome
