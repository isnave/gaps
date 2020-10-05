/*
 * Copyright 2020 Jason H House
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

package com.jasonhhouse.gaps.service;

import com.jasonhhouse.gaps.movie.InputMovie;
import com.jasonhhouse.gaps.movie.OutputMovie;
import com.jasonhhouse.gaps.movie.PlexMovie;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import org.jetbrains.annotations.NotNull;

public interface FileInputIo<IFC extends InputFileConfig, IM extends InputMovie> {

    @NotNull Boolean writeOwnedMovies(@NotNull IFC ifc, @NotNull Collection<IM> ownedBasicMovies);

    @NotNull List<IM> readOwnedMovies(@NotNull IFC ifc);

    @NotNull Boolean doesRssFileExist(@NotNull IFC ifc);

    @NotNull String getRssFile(@NotNull IFC ifc);

    @NotNull <OM extends OutputMovie> Boolean writeRssFile(@NotNull IFC ifc, @NotNull Collection<OM> recommendedMovies);
}
